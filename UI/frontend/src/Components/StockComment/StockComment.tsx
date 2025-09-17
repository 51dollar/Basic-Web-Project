import StockCommentForm from "./StockCommentForm/StockCommentForm.tsx";
import {commentPostApi} from "../../Services/CommentService.tsx";
import {toast} from "react-toastify";

type Props = {
  stockSymbol: string,
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({stockSymbol}: Props) => {
  const handleComment = (e: CommentFormInputs) => {
    commentPostApi(e.title, e.content, stockSymbol)
        .then((res) => {
          if (res) {
            toast.success("Comment successfully created!");
          }
        }).catch((e) => {
      toast.warning(e);
    });
  };
  return (
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  );
};

export default StockComment;