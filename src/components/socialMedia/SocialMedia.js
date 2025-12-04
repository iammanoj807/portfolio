import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { SiLeetcode } from "react-icons/si";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media}>
              {media.customIcon === "leetcode" ? (
                <SiLeetcode
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    backgroundColor: media.backgroundColor,
                    padding: "7px",
                    borderRadius: "50%",
                  }}
                  color="#FFA116"
                  size="1.1em"
                />
              ) : (
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              )}
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
