/** React Components */
import React, { FC, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";

/** Custom Styles */
import "../styles/form.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface AdditionalInformationProps {
  getValues(type: string, x: any): void;
}

const AdditionalInformation: FC<AdditionalInformationProps> = ({ getValues }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (
    editorState: React.SetStateAction<EditorState>
  ) => {
    setEditorState(editorState);
  };

  return (
    <div className="document-layout__section">
      <label className="document-edit-block__label">
        Additional Information
      </label>
      <div className="document-edit-block__content">
        <Editor
          editorState={editorState}
          editorStyle={{ lineHeight: "5%" }}
          toolbarOnFocus
          toolbarClassName="document-edit-block__rich-text-editor-toolbar"
          wrapperClassName="document-edit-block__rich-text-editor-wrapper"
          editorClassName="document-edit-block__rich-text-editor-editor"
          toolbar={{
            options: ["inline", "list", "textAlign"],
            inline: {
              options: ["bold", "italic", "underline"],
              bold: { className: "demo-option-custom" },
              italic: { className: "demo-option-custom" },
              underline: { className: "demo-option-custom" },
            },
            list: {
              options: ["unordered", "ordered"],
              unordered: { className: "demo-option-custom" },
              ordered: { className: "demo-option-custom" },
            },
            textAlign: {
              left: { className: "demo-option-custom" },
              center: {
                className: "demo-option-custom",
              },
              right: {
                className: "demo-option-custom",
              },
              justify: {
                className: "demo-option-custom",
              },
            },
          }}
          onEditorStateChange={onEditorStateChange}
          onChange={() =>
            getValues(
              "additionalInformation",
              convertToRaw(editorState.getCurrentContent())
            )
          }
        />
      </div>
    </div>
  );
};

export default AdditionalInformation;
