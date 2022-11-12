import * as React from "react";

interface EditModalProps {
  frontMatter: object;
}

export const EditModal = ({ frontMatter }: EditModalProps) => {
  const renderObject = (obj: object) => {
    return (
      <ul>
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            {key}: {renderValue(value)}
          </li>
        ))}
      </ul>
    );
  };

  const renderArray = (arr: []) =>
    arr.map((i) => (
      <ul>
        <li key={i}>{renderValue(i)}</li>
      </ul>
    ));

  const renderValue = (value: string | boolean | object | []) => {
    if (typeof value === "string") {
      return <input type="text" value={value} />;
    }
    if (typeof value === "boolean") {
      return <input type="checkbox" checked={Boolean(value)} />;
    }
    if (Array.isArray(value)) {
      return renderArray(value);
    }
    return renderObject(value);
  };

  return renderObject(frontMatter);
};
