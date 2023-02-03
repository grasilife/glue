import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import { glueConfig } from "@glue/glue-cli";
import { useState, useMemo } from "react";
import { GlueDocNavList } from "@glue/glue-react";
import classnames from "classnames";
import { Key } from "react";
import { GlueDocNavListCustomEvent } from "glue-components/dist/types/components";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./index.less";
interface IMeta {
  name: string;
  path: string;
  lang: string;
  type: string;
}
export default function DemoHome() {
  const navigate = useNavigate();
  const { lang, type } = useLoaderData() as IMeta;
  console.log(lang, type, "data");
  console.log(glueConfig, "glueConfig");
  const config = useMemo(() => {
    const { locales } = glueConfig.site;
    console.log(locales, "locales");
    if (locales) {
      console.log(locales[lang], "locales[this.lang]");
      return locales[lang];
    }
    console.log(glueConfig.site, "glueConfig.site");
    return glueConfig.site;
  }, []);
  const nav = useMemo(() => {
    return config.nav.filter(
      (item: { previewHidden: boolean }) => item.previewHidden !== true
    );
  }, [config.nav]);
  const smallTitle = useMemo(() => {
    return config.length >= 8;
  }, [config]);
  console.log(config, smallTitle, "config");
  function glueItemClick(event: GlueDocNavListCustomEvent<any>) {
    console.log(event, "event");
    let pathEnd = `/${type}/${lang}/${event.detail.path}`;
    console.log(pathEnd, "pathEndpathEnd");
    navigate(pathEnd);
  }
  return (
    <div className="demo-home">
      <h1
        className={classnames("demo-home__title", {
          "demo-home__title--small": smallTitle,
        })}
      >
        <img src={config.logo} />
        <span>{config.title}</span>
      </h1>
      <h2 v-if="glueConfig.description" className="demo-home__desc">
        {config.description}
      </h2>
      {nav.map((group: { title: any; items: any }, index: Key) => {
        return (
          <GlueDocNavList
            key={index}
            gtitle={group.title}
            group={group.items}
            onGlueItemClick={(event) => {
              glueItemClick(event);
            }}
          ></GlueDocNavList>
        );
      })}
    </div>
  );
}
