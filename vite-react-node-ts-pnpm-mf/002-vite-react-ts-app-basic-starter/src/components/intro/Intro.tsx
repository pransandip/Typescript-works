import { ReactElement, ReactNode } from "react";

// Conventional props
function HeadingTitle({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingContent({ children }: { children: string }) {
  return <h3>{children}</h3>;
}

function HeadingElement({ children }: { children: ReactNode }): ReactElement {
  return <p>{children}</p>;
}

// Default props
const defaultContainerProps = {
  heading: <strong>My default Heading</strong>,
};

function Container({
  heading,
  children,
}: {
  children: ReactNode;
} & typeof defaultContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

Container.defaultProps = defaultContainerProps;

const Intro = () => {
  return (
    <div>
      <HeadingTitle title="Hello there"></HeadingTitle>
      <HeadingContent>Hello guys</HeadingContent>
      <HeadingElement>
        <strong>it's a react element</strong>
      </HeadingElement>
      <Container>
        <h2>it's a react element</h2>
      </Container>
    </div>
  );
};

export default Intro;
