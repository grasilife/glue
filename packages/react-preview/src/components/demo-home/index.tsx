import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import { glueConfig } from "@glue/glue-cli";
import { GlueDocNavList } from "@glue/react-preview";
import { Key } from "react";
export default function DemoHome() {
  return (
    <div className="demo-home">
      <h1
        className="demo-home__title"
        // :class="{ 'demo-home__title--small': smallTitle }"
      >
        {/* <img :src="glueConfig.logo" /> */}
        <span>{glueConfig.title}</span>
      </h1>
      <h2 v-if="glueConfig.description" className="demo-home__desc">
        {glueConfig.description}
      </h2>
      {glueConfig.nav.map(
        (group: { title: any; items: any }, index: Key | null | undefined) => {
          return (
            <GlueDocNavList
              // v-for="(group, index) in glueConfig.nav"
              key={index}
              gtitle={group.title}
              group={group.items}
              // @glueItemClick="glueItemClick"
            ></GlueDocNavList>
          );
        }
      )}
    </div>
  );
}
