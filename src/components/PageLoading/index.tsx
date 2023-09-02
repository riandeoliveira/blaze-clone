import { CircularProgress } from "@mui/material";
import { observer } from "mobx-react-lite";
import { loadingStore } from "store/loading.store";
import styles from "./styles.module.scss";

export const PageLoading = observer((): JSX.Element => {
  return (
    <>
      {loadingStore.isLoading ? (
        <div className={styles.box}>
          <CircularProgress />
        </div>
      ) : null}
    </>
  );
});
