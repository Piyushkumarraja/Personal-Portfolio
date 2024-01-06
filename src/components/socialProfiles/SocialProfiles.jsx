import React from "react";
import cx from "classnames";

import { socialProfiles } from "config/socialProfiles";
import appStyles from "./SocialProfiles.module.scss";

const SocialProfiles = ({ row }) => {
  return (
    <div
      className={cx({
        [appStyles["social-icons-cnt-row"]]: row,
        [appStyles["social-icons-cnt"]]: !row,
      })}
    >
      {socialProfiles?.map((social) => {
        const { Icon } = social;
        return (
          <a
            key={social?.name}
            href={social?.href}
            className={appStyles["social-link"]}
            target={social?.newTab && "_blank"}
            rel={social?.newTab && "noopener noreferrer"}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialProfiles;
