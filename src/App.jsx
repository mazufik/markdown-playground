import MainLayout from "./components/main-layout/main-layout";
import Editor from "./components/editor/editor";
import Preview from "./components/preview/preview";
import MarkdownProvider from "./providers/markdown-provider";

function App() {
  return (
    <MarkdownProvider>
      <MainLayout>
        <MainLayout.Column>
          <Editor />
        </MainLayout.Column>
        <MainLayout.Column>
          <Preview />
        </MainLayout.Column>
      </MainLayout>
    </MarkdownProvider>
  );
}

export default App;
