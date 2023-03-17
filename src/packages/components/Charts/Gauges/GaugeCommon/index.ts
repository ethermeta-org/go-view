import image from '@/assets/images/chart/charts/gauge.png'
import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'

export const GaugeCommonConfig: ConfigType = {
  key: 'GaugeCommon',
  chartKey: 'VGaugeCommon',
  conKey: 'VCGaugeCommon',
  title: '仪表盘',
  category: ChatCategoryEnum.GAUGE,
  categoryName: ChatCategoryEnumName.GAUGE,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartFrameEnum.ECHARTS,
  image
}
