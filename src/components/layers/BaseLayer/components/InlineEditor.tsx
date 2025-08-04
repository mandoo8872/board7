import React from 'react';

interface InlineEditorProps {
  text: string;
  textStyle: {
    color: string;
    bold: boolean;
    italic: boolean;
    horizontalAlign: string;
    fontFamily: string;
  };
  fontSize: number;
  onChange: (text: string) => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const InlineEditor: React.FC<InlineEditorProps> = ({
  text,
  textStyle,
  fontSize,
  onChange,
  onBlur,
  onKeyDown
}) => {
  return (
    <textarea
      value={text}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      autoFocus
      data-editing="true"
      className="w-full h-full bg-transparent border-none outline-none resize-none"
      style={{
        color: textStyle.color,
        fontFamily: textStyle.fontFamily,
        fontSize: `${fontSize}px`,
        fontWeight: textStyle.bold ? 'bold' : 'normal',
        fontStyle: textStyle.italic ? 'italic' : 'normal',
        textAlign: textStyle.horizontalAlign as any,
        lineHeight: '1.2',
        wordBreak: 'break-word',
        cursor: 'text',
      }}
    />
  );
};

export default InlineEditor;