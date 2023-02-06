import { glueConfig } from "@glue/glue-cli";
import classnames from "classnames";
import { GlueDocNavListCustomEvent } from "glue-components/dist/types/components";
import { useRouteData, useNavigate } from "@solidjs/router";
import { clearDelegatedEvents } from "solid-js/web";
// import "./index.less";
import styles from "./index.module.less";

interface IMeta {
  name: string;
  path: string;
  lang: string;
  type: string;
}
export default function DemoHome() {
  const { path, lang, name, type }: IMeta = useRouteData();
  const { locales } = glueConfig.site;
  const navigate = useNavigate();

  const config = locales[lang];
  const nav = config.nav.filter(
    (item: { previewHidden: boolean }) => item.previewHidden !== true
  );
  console.log(nav, config, "navnav");
  const smallTitle = config.length >= 8;

  function glueItemClick(event: GlueDocNavListCustomEvent<any>) {
    console.log(event, "event");
    let pathEnd = `/${type}/${lang}/${event.detail.path}`;
    console.log(pathEnd, "pathEndpathEnd");
    navigate(pathEnd);
  }
  return (
    <div class={styles.demoHome}>
      <h1
        class={classnames(
          styles.demoHome__title,
          smallTitle && styles.demoHome__title__small
        )}
      >
        <img src={config.logo} />
        <span>{config.title}</span>
      </h1>
      {config.description ? (
        <h2 class={styles.demoHome__desc}>{config.description}</h2>
      ) : null}

      {nav.map((group: any) => {
        return (
          <glue-doc-nav-list
            gtitle={group.title}
            group={group.items}
            onGlueItemClick={(event: GlueDocNavListCustomEvent<any>) => {
              glueItemClick(event);
            }}
          ></glue-doc-nav-list>
        );
      })}
    </div>
  );
}
