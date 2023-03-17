import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../../app.css";

interface TransitionWrapperProps {
  children: JSX.Element;
  nodeRef: React.RefObject<HTMLDivElement>;
  refKey: number;
}

export default function TransitionWrapper({
  children,
  nodeRef,
  refKey,
}: TransitionWrapperProps): JSX.Element {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition<HTMLElement>
        key={refKey}
        nodeRef={nodeRef}
        classNames="fade"
        addEndListener={(done: () => void): any => {
          nodeRef?.current?.addEventListener("transitionend", done, false);
        }}
      >
        <div style={{ marginTop: "64px" }} ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
