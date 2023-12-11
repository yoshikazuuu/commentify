import { type CodeType } from "@/types/code";
import { CodeBlock, dracula } from "react-code-blocks";

function Code(props: CodeType) {
  return (
    <div className="font-mono">
      <CodeBlock
        text={props.text}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        wrapLongLines={true}
        theme={dracula}
        customStyle={{
          borderRadius: "0.5rem",
          fontSize: "1rem",
          padding: "0",
          margin: "0",
        }}
      />
    </div>
  );
}

export { Code };
