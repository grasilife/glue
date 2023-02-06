import { glueConfig } from "@glue/glue-cli";
import classnames from "classnames";
import { GlueDocNavListCustomEvent } from "glue-components/dist/types/components";
import "./index.less";
interface IMeta {
  name: string;
  path: string;
  lang: string;
  type: string;
}
export default function DemoHome() {
  // const navigate = useNavigate();
  // const { lang, type } = useLoaderData() as IMeta;
  // console.log(lang, type, "data");
  // console.log(glueConfig, "glueConfig");
  // const config = useMemo(() => {
  //   const { locales } = glueConfig.site;
  //   console.log(locales, "locales");
  //   if (locales) {
  //     console.log(locales[lang], "locales[this.lang]");
  //     return locales[lang];
  //   }
  //   console.log(glueConfig.site, "glueConfig.site");
  //   return glueConfig.site;
  // }, []);
  // const nav = useMemo(() => {
  //   return config.nav.filter(
  //     (item: { previewHidden: boolean }) => item.previewHidden !== true
  //   );
  // }, [config.nav]);
  // const smallTitle = useMemo(() => {
  //   return config.length >= 8;
  // }, [config]);
  // function glueItemClick(event: GlueDocNavListCustomEvent<any>) {
  //   console.log(event, "event");
  //   let pathEnd = `/${type}/${lang}/${event.detail.path}`;
  //   console.log(pathEnd, "pathEndpathEnd");
  //   navigate(pathEnd);
  // }
  return (
    <div class="demo-home">
      {/* <h1
        class={classnames("demo-home__title", {
          "demo-home__title--small": smallTitle,
        })}
      >
        <img src={config.logo} />
        <span>{config.title}</span>
      </h1>
      <h2 v-if="glueConfig.description" class="demo-home__desc">
        {config.description}
      </h2> */}
      {/* {nav.map((group: { title: any; items: any }, index: Key) => {
        return (
          <GlueDocNavList
            key={index}
            gtitle={group.title}
            group={group.items}
            onGlueItemClick={(event: GlueDocNavListCustomEvent<any>) => {
              glueItemClick(event);
            }}
          ></GlueDocNavList>
        );
      })} */}
    </div>
  );
}
