import React, { useState } from "react";
import PropTypes from "prop-types";
import MDEditor, { commands } from "@uiw/react-md-editor";
import MediaLib from "../MediaLib";
import styled from "styled-components";
import "@uiw/react-md-editor/dist/markdown-editor.css";

const Wrapper = styled.div`
  .w-md-editor {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
    }
    .w-md-editor-preview {
      display: block;
    }
  }
  .w-md-editor-content {
    flex: 1 1 auto;
  }
  .w-md-editor-text {
    margin: 0;
  }
  .wmde-markdown {
    display: none;
  }
`;

const Editor = ({ onChange, name, value }) => {
  const [mediaLibVisible, setMediaLibVisible] = useState(false);

  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);

  const handleChangeAssets = (assets) => {
    let newValue = value ? value : "";

    assets.map((asset) => {
      if (asset.mime.includes("image")) {
        const imgTag = `![](${asset.url})`;

        newValue = `${newValue}${imgTag}`;
      }

      // Handle videos and other type of files by adding some code
    });

    onChange({ target: { name, value: newValue || "" } });
    handleToggleMediaLib();
  };
  return (
    <Wrapper>
      <MDEditor
        commands={[
          commands.title,
          commands.bold,
          commands.codeBlock,
          commands.italic,
          commands.strikethrough,
          commands.hr,
          commands.group,
          commands.divider,
          commands.link,
          commands.quote,
          commands.code,
          {
            name: "image",
            keyCommand: "image",
            buttonProps: { "aria-label": "Insert title3" },
            icon: (
              <svg width="12" height="12" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
                ></path>
              </svg>
            ),
            execute: (state, api) => {
              handleToggleMediaLib();
            },
          },
          commands.unorderedListCommand,
          commands.orderedListCommand,
          commands.checkedListCommand,
          commands.codeEdit,
          commands.codeLive,
          commands.codePreview,
          commands.fullscreen,
        ]}
        value={value || ""}
        onChange={(newValue) => {
          onChange({ target: { name, value: newValue || "" } });
        }}
      />
      <div style={{ padding: "50px 0 0 0" }} />
      <MDEditor.Markdown source={value || ""} />
      <MediaLib
        isOpen={mediaLibVisible}
        onChange={handleChangeAssets}
        onToggle={handleToggleMediaLib}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
