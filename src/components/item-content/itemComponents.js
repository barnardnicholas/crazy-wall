import Polaroid from "./Polaroid";
import Photo2 from "./Photo2";
import NotepadPage from "./NotepadPage";
import PostIt from "./PostIt";
import NewspaperColumn from "./NewspaperColumn";
import NewspaperFrontPage1 from "./NewspaperFrontPage1";

const itemComponents = {
  photo1: (props) => {
    return (
      // <Suspense fallback={<div>Loading...</div>}>
      <Polaroid
        key={props.data.id}
        data={props.data}
        handleContentClick={props.handleContentClick}
        handleMoveToFront={props.handleMoveToFront}
        handleMoveToBack={props.handleMoveToBack}
      />
      // </Suspense>
    );
  },
  photo2: (props) => {
    return (
      // <Suspense fallback={<div>Loading...</div>}>
      <Photo2
        key={props.data.id}
        data={props.data}
        handleContentClick={props.handleContentClick}
        handleMoveToFront={props.handleMoveToFront}
        handleMoveToBack={props.handleMoveToBack}
      />
      // </Suspense>
    );
  },
  postit: (props) => {
    return (
      // <Suspense fallback={<div>Loading...</div>}>
      <PostIt
        key={props.data.id}
        data={props.data}
        handleContentClick={props.handleContentClick}
        handleMoveToFront={props.handleMoveToFront}
        handleMoveToBack={props.handleMoveToBack}
      />
      // </Suspense>
    );
  },
  note1: (props) => {
    return (
      // <Suspense fallback={<div>Loading...</div>}>
      <NotepadPage
        key={props.data.id}
        data={props.data}
        handleContentClick={props.handleContentClick}
        handleMoveToFront={props.handleMoveToFront}
        handleMoveToBack={props.handleMoveToBack}
      />
      // </Suspense>
    );
  },
  newspaperColumn: (props) => {
    return (
      // <Suspense fallback={<div>Loading...</div>}>
      <NewspaperColumn
        key={props.data.id}
        data={props.data}
        handleContentClick={props.handleContentClick}
        handleMoveToFront={props.handleMoveToFront}
        handleMoveToBack={props.handleMoveToBack}
      />
      // </Suspense>
    );
  },
  newspaperFrontPage1: (props) => {
    return (
      // <Suspense fallback={<div>Loading...</div>}>
      <NewspaperFrontPage1
        key={props.data.id}
        data={props.data}
        handleContentClick={props.handleContentClick}
        handleMoveToFront={props.handleMoveToFront}
        handleMoveToBack={props.handleMoveToBack}
      />
      // </Suspense>
    );
  },
};

export default itemComponents;
