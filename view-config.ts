  import { construct } from "../../../core";
  import { BaseViewConfigDto } from "../../models/base-view-config";
  import { 
    Configurable, 
    ConfigurableEnum,
    ConfigurationCategory, 
    EditableType, 
    Serializable } from "../../../meta/decorators";
  import { CutOffStrategy, PropertyAlignment, PropertyCategory } from "../../../meta/models";
  import { LOCALIZATION_DICTIONARY } from "../../../i18n/models/localization-dictionary";
  import { EditorType } from "../../../meta/models";
  import { ComponentAbsoluteSize } from "../../models/component-size";
  
  const TYPE_NAME = "NumberDisplayViewConfig";
  
  // @dynamic
  @EditableType({ fullName: TYPE_NAME })
  export class NumberDisplayViewConfig extends BaseViewConfigDto {
    typeName = TYPE_NAME;
  
    @Configurable({
      displayName: LOCALIZATION_DICTIONARY.propertySheet.Title,
      editorType: EditorType.TextBox
    })
    @Serializable()
    title!: string;
  
    @ConfigurationCategory(
      PropertyCategory.Data,
      LOCALIZATION_DICTIONARY.propertySheet.DataAggregation,
      PropertyAlignment.Right,
      11
    )
    @ConfigurableEnum(LOCALIZATION_DICTIONARY.propertySheet.CutOffStrategy, CutOffStrategy)
    @Serializable(CutOffStrategy.Downsample)
    cutOffStrategy!: CutOffStrategy;
  
    constructor(viewConfigDto: Partial<NumberDisplayViewConfig> = {}) {
      super();
      const defaultOverrides: Partial<SingleValueViewConfig> = {
        size: getDefaultSize(),
        runtimeView: { runtimeSize: getDefaultSize() }
      };
      construct(this, viewConfigDto, TYPE_NAME, defaultOverrides);
    }
  }
  
  function getDefaultSize(): ComponentAbsoluteSize {
    return new ComponentAbsoluteSize(22, 8);
  }