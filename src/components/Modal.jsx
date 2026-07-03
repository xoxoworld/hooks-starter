import "./Modal.css";

export default function Modal({ open, title = "모달", onClose, children }) {
  if (!open) return null;

  return (
    <>
      <div className="modalOverlay" onClick={onClose}>
        <div
          className="modalContent"
          onClick={e => e.stopPropagation()}
          // 내부를 클릭했을때 부모 div를 클릭한 것으로 인식되지 않도록, event bubbling 차단
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="modalHeader">
            <h3 className="modalTitle">{title}</h3>
            <button type="button" className="modalCloseIcon" onClick={onClose} aria-label="닫기">
              ✕
            </button>
          </div>

          <div className="modalBody">{children}</div>

          <div className="modalFooter">
            <button type="button" className="modalCloseBtn" onClick={onClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
