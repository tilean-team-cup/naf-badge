import Component from "@glimmer/component";
import { htmlSafe } from "@ember/template";

export default class NafBadge extends Component {
  get isNafVerified() {
    const fields = this.args.outletArgs?.user?.custom_fields;
    return fields?.user_field_3 === "true";
  }

  get nafId() {
    return this.args.outletArgs?.user?.custom_fields?.user_field_1;
  }

  get emojiUrl() {
    return htmlSafe(
      `<img src="/uploads/default/original/1X/naf.png" class="emoji naf-emoji" title=":naf:" alt=":naf:">`
    );
  }

  <template>
    {{#if this.isNafVerified}}
      <span class="naf-verified-badge" title="NAF #{{this.nafId}}">
        {{this.emojiUrl}} NAF #{{this.nafId}}
      </span>
    {{/if}}
  </template>
}
