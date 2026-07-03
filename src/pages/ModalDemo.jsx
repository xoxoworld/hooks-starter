import useToggle from "../hooks/useToggle";
import Modal from "../components/Modal";

export default function ModalDemo() {
  const [open, toggle, { setTrue: openModal, setFalse: closeModal }] = useToggle(false);

  return (
    <>
      <div style={{ padding: 16 }}>
        <h2>UseToggle 활용 모달</h2>
        <p>
          상태: <b>{String(open)}</b>
        </p>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" onClick={openModal}>
            모달 열기
          </button>
          <button type="button" onClick={toggle}>
            toggle
          </button>
          <button type="button" onClick={closeModal}>
            모달 닫기
          </button>
        </div>

        <Modal open={open} title="공지" onClose={closeModal}>
          <p style={{ margin: 0 }}>
            이 모달은 <code>useToggle</code>로 열림/닫힘을 관리한다.
          </p>
        </Modal>
      </div>
    </>
  );
}
