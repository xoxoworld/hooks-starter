import useToggle from "../hooks/useToggle";
import "./AccordionItem.css";

export default function AccordionItem({ children, title, defaultOpen = false }) {
  const [open, toggle, { setFalse: close }] = useToggle(defaultOpen);

  return (
    <div className="accordionItem">
      <button type="button" className="accordionHeader" onClick={toggle} aria-expanded={open}>
        <span className="accordionTitle">{title}</span>
        <span className="accordionIcon">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="accordionBody">
          {children}
          <div className="accordionFooter">
            <button type="button" className="accordionCloseBtn" onClick={close}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
