import React, { Fragment, useState } from "react";
import Accordion from "./Accordion";
import CustomSection from "./LeftMenuGroupButton";

const AccordionContainer = ({ sections, render } : any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    render && (
      <Fragment>
        <br />
        {sections.map((section:any, i:number) => (
          <Accordion
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={section.name}
            key={i}
          >
            {!!section &&
              section.customSections.map((template:any, index : number) => {
                return <CustomSection {...template} key={index} />;
              })}
          </Accordion>
        ))}
      </Fragment>
    )
  );
};

export default AccordionContainer;
