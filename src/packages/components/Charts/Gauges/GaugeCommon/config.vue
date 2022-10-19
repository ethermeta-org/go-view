<template>
  <!-- Echarts 全局设置 -->
  <global-setting :optionData="optionData"></global-setting>
  <CollapseItem v-for="(item, index) in seriesList" :key="index" :name="`仪表盘-${index + 1}`" :expanded="true">
    <SettingItemBox name="图形">
      <SettingItem name="颜色">
        <n-color-picker size="small" :modes="['hex']" v-model:value="item.itemStyle.color"></n-color-picker>
      </SettingItem>
      <SettingItem>
        <n-button size="small" @click="item.itemStyle.color = '#58D9F9'"> 恢复默认 </n-button>
      </SettingItem>
      <setting-item name="仪表盘半径">
        <n-input v-model:value="item.radius" size="small" :min="1"></n-input>
      </setting-item>
      <SettingItem>
        <n-button size="small" @click="item.radius = '80%'"> 恢复默认 </n-button>
      </SettingItem>
      <setting-item name="X偏移">
        <n-input v-model:value="item.center[0]" size="small" :min="1"></n-input>
      </setting-item>
      <setting-item name="Y偏移">
        <n-input v-model:value="item.center[1]" size="small" :min="1"></n-input>
      </setting-item>
      <setting-item name="最小数据值">
        <n-input-number v-model:value="item.min" size="small" :min="1"></n-input-number>
      </setting-item>
      <setting-item name="最大数据值">
        <n-input-number v-model:value="item.max" size="small" :min="1"></n-input-number>
      </setting-item>
    </SettingItemBox>
    <SettingItemBox name="数值">
      <SettingItem name="文字颜色">
        <n-color-picker size="small" :modes="['hex']" v-model:value="item.detail.rich.value.color"></n-color-picker>
      </SettingItem>
      <SettingItem>
        <n-button size="small" @click="item.detail.rich.value.color = '#777'"> 恢复默认 </n-button>
      </SettingItem>
      <setting-item name="文字大小">
        <n-input-number v-model:value="item.detail.rich.value.fontSize" size="small" :min="1"></n-input-number>
      </setting-item>
      <setting-item name="行高">
        <n-input v-model:value="item.detail.lineHeight" size="small" :min="1"></n-input>
      </setting-item>
      <setting-item name="高度">
        <n-input v-model:value="item.detail.height" size="small" :min="1"></n-input>
      </setting-item>
      <setting-item name="宽度">
        <n-input v-model:value="item.detail.width" size="small" :min="1"></n-input>
      </setting-item>
      <setting-item name="X偏移">
        <n-input v-model:value="item.detail.offsetCenter[0]" size="small" :min="1"></n-input>
      </setting-item>
      <setting-item name="Y偏移">
        <n-input v-model:value="item.detail.offsetCenter[1]" size="small" :min="1"></n-input>
      </setting-item>
    </SettingItemBox>
  </CollapseItem>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { GlobalSetting, CollapseItem, SettingItemBox, SettingItem } from '@/components/Pages/ChartItemSetting'
import { GlobalThemeJsonType } from '@/settings/chartThemes/index'

const props = defineProps({
  optionData: {
    type: Object as PropType<GlobalThemeJsonType>,
    required: true
  }
})

const seriesList = computed(() => {
  return props.optionData.series
})
</script>
