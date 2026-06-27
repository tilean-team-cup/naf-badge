import Component from "@glimmer/component";
import { service } from "@ember/service";

export default class NafLink extends Component {
  @service currentUser;

  get isOwnProfile() {
    const model = this.args.outletArgs?.model;
    return model?.id === this.currentUser?.id;
  }

  <template>
    {{#if this.isOwnProfile}}
      <div class="control-group naf-link-section">
        <label class="control-label">NAF</label>
        <div class="controls">
          <a
            href="https://naf-bridge.tilea.net/naf/link"
            class="btn btn-default naf-connect-btn"
          >
            Collega account NAF
          </a>
        </div>
      </div>
    {{/if}}
  </template>
}
