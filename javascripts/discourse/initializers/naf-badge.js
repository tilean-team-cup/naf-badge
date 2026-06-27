import { apiInitializer } from "discourse/lib/api";
import { schedule } from "@ember/runloop";

export default apiInitializer("1.0", (api) => {
  api.onPageChange(() => {
    schedule("afterRender", () => {
      document
        .querySelectorAll("a.naf-verified-icon")
        .forEach((el) => el.setAttribute("target", "_blank"));
    });
  });

  api.addPosterIcons((userCustomFields) => {
    if (userCustomFields?.user_field_3 !== "true") {
      return;
    }

    const nafId = userCustomFields.user_field_1 || "";

    return {
      emoji: "naf",
      title: `NAF #${nafId}`,
      className: "naf-verified-icon",
      url: `https://member.thenaf.net/index.php?module=NAF&type=coachpage&coach=${nafId}&variant=16`,
    };
  });
});
