import type { App } from 'vue';
import {
  create,
  NA,
  NP,
  NH1,
  NH2,
  NH3,
  NH4,
  NText,
  NTime,
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NGradientText,
  NInput,
  NImage,
  NButton,
  NForm,
  NFormItem,
  NCheckboxGroup,
  NCheckbox,
  NIcon,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,
  NMenu,
  NBreadcrumb,
  NBreadcrumbItem,
  NDropdown,
  NSpace,
  NTooltip,
  NAvatar,
  NTabs,
  NTabPane,
  NCard,
  NRow,
  NCol,
  NDrawer,
  NDrawerContent,
  NDivider,
  NSwitch,
  NBadge,
  NAlert,
  NElement,
  NTag,
  NNotificationProvider,
  NProgress,
  NDatePicker,
  NGrid,
  NGridItem,
  NList,
  NListItem,
  NThing,
  NDataTable,
  NPopover,
  NPagination,
  NSelect,
  NRadioGroup,
  NRadio,
  NSteps,
  NStep,
  NInputGroup,
  NResult,
  NDescriptions,
  NDescriptionsItem,
  NTable,
  NInputNumber,
  NLoadingBarProvider,
  NModal,
  NUpload,
  NTree,
  NSpin,
  NTimePicker,
  NBackTop,
  NSkeleton,
  NCarousel,
  NScrollbar,
  NCollapseTransition
} from 'naive-ui';

const naive = create({
  components: [
    NA,
    NP,
    NH1,
    NH2,
    NH3,
    NH4,
    NText,
    NTime,
    NMessageProvider,
    NDialogProvider,
    NConfigProvider,
    NGradientText,
    NInput,
    NButton,
    NForm,
    NFormItem,
    NCheckboxGroup,
    NCheckbox,
    NIcon,
    NImage,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NMenu,
    NBreadcrumb,
    NBreadcrumbItem,
    NDropdown,
    NSpace,
    NTooltip,
    NAvatar,
    NTabs,
    NTabPane,
    NCard,
    NRow,
    NCol,
    NDrawer,
    NDrawerContent,
    NDivider,
    NSwitch,
    NBadge,
    NAlert,
    NElement,
    NTag,
    NNotificationProvider,
    NProgress,
    NDatePicker,
    NGrid,
    NGridItem,
    NList,
    NListItem,
    NThing,
    NDataTable,
    NPopover,
    NPagination,
    NSelect,
    NRadioGroup,
    NRadio,
    NSteps,
    NStep,
    NInputGroup,
    NResult,
    NDescriptions,
    NDescriptionsItem,
    NTable,
    NInputNumber,
    NLoadingBarProvider,
    NModal,
    NUpload,
    NTree,
    NSpin,
    NTimePicker,
    NBackTop,
    NSkeleton,
    NCarousel,
    NScrollbar,
    NCollapseTransition
  ],
});

export function setupNaive(app: App<Element>) {
  app.use(naive);
}
