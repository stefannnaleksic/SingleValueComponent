import { Component, ElementRef } from "@angular/core";
import {
  BaseComponent,
  ComponentCategory,
  ComponentConstructorParams,
  ConnectorRoles,
  EditableWidget,
  EquipmentDataSourceDto,
  isDefined,
  LayoutBuilder,
  LOCALIZATION_DICTIONARY,
  NumberOfDataPointsToRequest,
  View
} from "ui-core";
import { Roles } from "./roles";
import { NumberDisplayViewConfig } from "./view-config";

@Component({
  selector: "c-number-display",
  templateUrl: "./number-display.component.html",
  styleUrls: ["./number-display.component.scss"],
  providers: [{ provide: BaseComponent, useExisting: NumberDisplayComponent }]
})
@LayoutBuilder(
  ComponentCategory.Glitter,
  "NumberDisplayComponent",
  "IconPlaceholder",
  "abb-icon ",
  null,
  //TODO: add localization dictionary entry
)
@ConnectorRoles(Roles)
@NumberOfDataPointsToRequest(calculateNumberOfDataPointsToRequest)
@EditableWidget({
  fullName: "NumberDisplayComponent",
  title: "number-display",
})
export class NumberDisplayComponent extends BaseComponent {
  constructor(params: ComponentConstructorParams, hostElementRef: ElementRef) {
    super(params, hostElementRef);
  }

  @View(NumberDisplayViewConfig)
  public get view() {
    return this.currentState.view as NumberDisplayViewConfig;
  }

  protected updateDisplay(): void {
  }

}

export function calculateNumberOfDataPointsToRequest(
  strategy: string,
  componentWidthInPix: number,
  componentHeightInPix: number,
  connectorRole: string
): number {
  return 1;
}
