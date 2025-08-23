
import { useTranslation } from "react-i18next";
import '../../translation/translation';

export default function Security() {
	const { t } = useTranslation();
    return (<>
		<h1>{t("securitySettings")}</h1>
	</>);
}