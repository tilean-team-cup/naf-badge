import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.0", (api) => {
  api.decorateWidget("poster-name:after", (helper) => {
    const attrs = helper.attrs;
    const user = attrs.user;
    const fields = user?.custom_fields;

    if (!fields || fields.user_field_3 !== "true") {
      return;
    }

    const nafId = fields.user_field_1 || "";

    return helper.h(
      "span.naf-verified-badge",
      { title: `NAF #${nafId}` },
      [
        helper.h("img.emoji.naf-emoji", {
          src: "/uploads/default/original/1X/c1e9f7bc184c0dad35be8e9a6487b200a573ca9d.png",
          alt: ":naf:",
          title: ":naf:",
        }),
        ` NAF #${nafId}`,
      ]
    );
  });
});
