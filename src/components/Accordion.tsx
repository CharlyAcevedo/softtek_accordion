import { ReactNode, useCallback, useMemo, useState } from "react";
import { ArrowDownOnSquareIcon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid"
import './accordion.css'

type AccordionProps = {
  id?: number | string
  title: string
  content?: string
  children?: ReactNode
  collapsed?: boolean
}

/**
 * Example of Accordion component made with React
 * @param {object} param0 
 * @param {number} param0.id Optional Unique id for this component
 * @param {string} param0.title The title or text for the main tab of this component
 * @param {string} param0.content An optional param that contains the text to render as content for the tab
 * @param {ReactNode} param0.children An optional param with a child or child tree to render within the tab container
 * @param {boolean} param0.collapsed Optional param to set if accordion start expanded or collapsed, default is true
 * @returns React component named Accordion
 */
export default function Accordion({id, title, content, children, collapsed = true}: AccordionProps) {

  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  const accorionId = useMemo(() => id ? `${id}` : uuidv4(), [id])

  const handleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  const ifContent = useCallback(() => content ? <p>{content}</p> : <></>, [content])
  const ifChildren = useCallback(() => children ? children : <></>, [children])

    return (
        <div className="accordion-container" id={accorionId}>
            <header 
              className="tab-title"
              onClick={handleCollapsed}
            >
                <h2 className="tab-title-text">{title}</h2>
                {isCollapsed ? 
                  <ArrowDownOnSquareIcon className="tab-title-arrow"/> : 
                  <ArrowUpOnSquareIcon className="tab-title-arrow"/>
                }
            </header>
            <section 
              className={`tab-container ${isCollapsed ? 'tab-collapsed' : 'tab-expanded'}`}
            >
              {ifContent()}
              {ifChildren()}
            </section>
        </div>
    )
}
