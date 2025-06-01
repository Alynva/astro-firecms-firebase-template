import { FirebaseCMSApp } from "firecms";
import "typeface-rubik";
import { firebaseApp } from "../../firebase/config";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default function FireCMSPage() {
  return (
    <FirebaseCMSApp
      name={"My Website CMS"}
      authentication={auth}
      firestore={firestore}
      collections={[/* your collection configs here */]}
    />
  );
}
