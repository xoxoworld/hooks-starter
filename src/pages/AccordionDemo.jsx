import AccordionItem from "../components/AccordionItem";

export default function AccordionDemo() {
  return (
    <div style={{ padding: 16 }}>
      <h2>아코디언 데모</h2>

      <div style={{ display: "grid", gap: 10 }}>
        <AccordionItem title="Q1. 환불 규정은?" defaultOpen>
          <p style={{ margin: 0 }}>결제 후 7일 이내, 콘텐츠 미시청 시 환불 가능하다.</p>
        </AccordionItem>

        <AccordionItem title="Q2. 선수 지식이 필요한가?">
          <p style={{ margin: 0 }}>기초 JS/React를 알고 있으면 더 빠르게 이해한다.</p>
        </AccordionItem>

        <AccordionItem title="Q3. 프로젝트는 포함되나?">
          <p style={{ margin: 0 }}>모달/아코디언/페이지네이션 등 실전 UI를 다룬다.</p>
        </AccordionItem>
      </div>
    </div>
  );
}
