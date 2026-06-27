import Component from "@glimmer/component";

export default class NafBadge extends Component {
  get isNafVerified() {
    const fields = this.args.outletArgs?.user?.custom_fields;
    return fields?.user_field_3 === "true";
  }

  get nafId() {
    return this.args.outletArgs?.user?.custom_fields?.user_field_1;
  }

  <template>
    {{#if this.isNafVerified}}
      <span class="naf-verified-badge" title="NAF #{{this.nafId}}">
        ⚔️ NAF #{{this.nafId}}
      </span>
    {{/if}}
  </template>
}
