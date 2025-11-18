import "../../css/App.css";
interface Props {
  children: React.ReactNode;
}

const Scroll = ({ children }: Props) => {
  // console.log(children);
  return <div className="scroll">{children}</div>;
};

export default Scroll;
