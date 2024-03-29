<template>
  <div class="sidebar">
    <div class="sidebar__controls">
      <div class="sidebar__control" @click="openAddTopicModal">
        <Icon class="sidebar__control-icon" icon="PlusIcon"></Icon>Add New
        Channel
      </div>
    </div>
    <div class="sidebar__categories">
      <div class="sidebar__category">
        <div
          class="sidebar__title"
          :class="{ sidebar__title_active: subscribedOpen }"
          @click="subscribedOpen = !subscribedOpen"
        >
          Connected ({{ subscribedTopics.length }})
          <Icon class="sidebar__title-icon" icon="DropdownIcon"></Icon>
        </div>
        <div
          class="sidebar__items"
          :class="{ sidebar__items_active: subscribedOpen }"
        >
          <div
            class="sidebar__item sidebar__item_state_subscribed"
            v-for="(topic, i) in subscribedTopics"
            :key="i"
            @click="setRemoteFilesTopic(topic.Name)"
            :class="
              remoteFilesConfig.topicName === topic.Name
                ? 'sidebar__item_active'
                : null
            "
          >
            {{ topic.Name }}
          </div>
        </div>
      </div>
      <div class="sidebar__category">
        <div
          class="sidebar__title"
          :class="{ sidebar__title_active: pendingOpen }"
          @click="pendingOpen = !pendingOpen"
        >
          Pending ({{ pendingTopics.length }})
          <Icon class="sidebar__title-icon" icon="DropdownIcon"></Icon>
        </div>
        <div
          class="sidebar__items"
          :class="{ sidebar__items_active: pendingOpen }"
        >
          <div
            class="sidebar__item sidebar__item_state_pending"
            v-for="(topic, i) in pendingTopics"
            :key="i"
            @click="setRemoteFilesTopic(topic.Name)"
            :class="
              remoteFilesConfig.topicName === topic.Name
                ? 'sidebar__item_active'
                : null
            "
          >
            {{ topic.Name }}
          </div>
        </div>
      </div>
      <div class="sidebar__category">
        <div
          class="sidebar__title"
          :class="{ sidebar__title_active: unsubscribedOpen }"
          @click="unsubscribedOpen = !unsubscribedOpen"
        >
          Disconnected ({{ unsubscribedTopics.length }})
          <Icon class="sidebar__title-icon" icon="DropdownIcon"></Icon>
        </div>
        <div
          class="sidebar__items"
          :class="{ sidebar__items_active: unsubscribedOpen }"
        >
          <div
            class="sidebar__item sidebar__item_state_unsubscribed"
            v-for="(topic, i) in unsubscribedTopics"
            :key="i"
            @click="setRemoteFilesTopic(topic.Name)"
            :class="
              remoteFilesConfig.topicName === topic.Name
                ? 'sidebar__item_active'
                : null
            "
          >
            {{ topic.Name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Sidebar.scss";
</style>

<script>
import Icon from "@/components/Icon/Icon";

import { mapState, mapMutations } from "vuex";

export default {
  components: { Icon },
  data: () => {
    return {
      topicName: "",
      subscribedOpen: true,
      pendingOpen: false,
      unsubscribedOpen: false,
    };
  },
  computed: {
    ...mapState("topics", ["topics"]),
    ...mapState("files", ["remoteFilesConfig"]),
    subscribedTopics() {
      return this._.filter(this.topics, ["SubscriptionState", 2]);
    },
    pendingTopics() {
      return this._.filter(this.topics, ["SubscriptionState", 1]);
    },
    unsubscribedTopics() {
      return this._.filter(this.topics, ["SubscriptionState", 0]);
    },
  },
  mounted() {
    this.setInitialTopic();
  },
  methods: {
    ...mapMutations({
      setRemoteFilesTopic: "files/setRemoteFilesTopic",
    }),
    setInitialTopic() {
      if (this.subscribedTopics.length > 0) {
        this.setRemoteFilesTopic(this.subscribedTopics[0].Name);
      }
    },
    openAddTopicModal() {
      this.$bus.$emit("openAddTopicModal");
    },
  },
};
</script>
