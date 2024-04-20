import { ReactNode, useState } from "react";
import { ArrowDownOnSquareIcon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import './accordion.css'

type AccordionProps = {
  id: number
  title: string
  content?: string
  children?: ReactNode
  collapsed?: boolean
}

/**
 * Example of Accordion component made with React
 * @param {object} param0 
 * @param {number} param0.id Unique id for this component
 * @param {string} param0.title The title or text for the main tab of this component
 * @param {string} param0.content An optional param that contains the text to render as content for the tab
 * @param {ReactNode} param0.children An optional param with a child or child tree to render within the tab container
 * @param {boolean} param0.collapsed Optional param to set if accordion start expanded or collapsed, default is true
 * @returns React component named Accordion
 */
export default function Accordion({id, title, content, children, collapsed = true}: AccordionProps) {

  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  const handleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

    return (
        <div className="accordion-container" id={`accordion-${id}`}>
            <header 
              className="tab-title"
              onClick={handleCollapsed}
            >
                <h2 className="tab-title-text">{title}</h2>
                {isCollapsed ? <ArrowDownOnSquareIcon className="tab-title-arrow"/> : <ArrowUpOnSquareIcon className="tab-title-arrow"/>}
            </header>
            <section 
              className={`tab-container ${isCollapsed ? 'tab-collapsed' : 'tab-expanded'}`}
            >
              {content ? <p>{content}</p> : <></>}
              {children ? children : <></>}
            </section>
        </div>
    )
}

/*
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
*/