import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import { glueConfig } from "@glue/glue-cli";
import { useState, useMemo } from "react";
import { GlueDocNavList } from "@glue/glue-react";
import classnames from "classnames";
import { Key } from "react";
import { GlueDocNavListCustomEvent } from "glue-components/dist/types/components";
import { useLoaderData } from "react-router-dom";
export default function DemoHome() {
  const data = useLoaderData();
  console.log(data, "data");
  // const [smallTitle, setSmallTitle] = useState(glueConfig.title.length >= 8);
  // const msg = useMemo(() => {
  //   const { locales } = glueConfig.site;
  //   console.log(locales, "locales");
  //   if (locales) {
  //     console.log(locales[this.lang], "locales[this.lang]");
  //     return locales[this.lang];
  //   }
  //   console.log(glueConfig.site, "glueConfig.site");
  //   return glueConfig.site;
  // }, [name, food]);
  function glueItemClick(event: GlueDocNavListCustomEvent<any>) {
    console.log(event, "event");
    // let pathEnd = `/${this.type}/${this.lang}/${event.detail.path}`;
    // console.log(pathEnd, "pathEndpathEnd");
    // this.$router.push(pathEnd);
  }
  return (
    <div
      className={classnames("demo-home", {
        // "demo-home__title--small": smallTitle,
      })}
    >
      11
      <h1
        className="demo-home__title"
        // :class="{ 'demo-home__title--small': smallTitle }"
      >
        <img src={glueConfig.logo} />
        <span>{glueConfig.title}</span>
      </h1>
      <h2 v-if="glueConfig.description" className="demo-home__desc">
        {glueConfig.description}
      </h2>
      {/* {glueConfig.nav.map((group: { title: any; items: any }, index: Key) => {
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
      })} */}
    </div>
  );
}
