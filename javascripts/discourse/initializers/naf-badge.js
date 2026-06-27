import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.0", (api) => {
  api.registerValueTransformer("poster-name-icons", ({ value, context }) => {
    const user = context?.user;
    const fields = user?.custom_fields;

    if (!fields || fields.user_field_3 !== "true") {
      return value;
    }

    const nafId = fields.user_field_1 || "";

    return [
      ...value,
      {
        emoji: "naf",
        title: `NAF #${nafId}`,
        extraClass: "naf-verified-icon",
      },
    ];
  });
});
