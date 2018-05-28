import { ELEMENT_ATTRIBUTE_KEY, ElementFunctions, getElementAttributes } from '../element'
import { ParseData } from '../parse-data'
import * as parsers from '../parsers'
import * as addParsers from '../parsers/add-parsers'
import * as assetParsers from '../parsers/asset-parsers'
import * as mergeParsers from '../parsers/merge-parsers'
import * as textParsers from '../parsers/text-parsers'
import * as elementNameFilters from '../parsers/element-name-filters'
import * as arrayFormatters from '../formatters/array-formatters'
import * as elementFormatters from '../formatters/element-formatters'
import * as keyFormatters from '../formatters/key-formatters'
import { defaultMerge, singleElement } from '../merge'
import * as functionTemplates from './function-templates'

import { BASE_FUNCTIONS } from './base'

export const DETAILED_FUNCTIONS = {
  ...BASE_FUNCTIONS,
  "AbilityCategories": functionTemplates.removeFromOutput,
  "AcquireFilters": functionTemplates.removeFromOutput,
  "AcquireLeashRadius": functionTemplates.removeFromOutput,
  "AcquirePlayer": functionTemplates.removeFromOutput,
  "AcquirePriority": functionTemplates.removeFromOutput,
  "Acceleration": functionTemplates.removeFromOutput,
  "AddedThreat": functionTemplates.removeFromOutput,
  "AIBaseThreat": functionTemplates.removeFromOutput,
  "AIEvalFactor": functionTemplates.removeFromOutput,
  "AIHealthThresholds": functionTemplates.removeFromOutput,
  "AIThinkTree": functionTemplates.removeFromOutput,
  "AIUtility": functionTemplates.removeFromOutput,
  "AlertName": functionTemplates.removeFromOutput,
  "AlertTooltip": functionTemplates.removeFromOutput,
  "Alignment": functionTemplates.removeFromOutput,
  "AlliedPushPriority": functionTemplates.removeFromOutput,
  "AllowedMovement": functionTemplates.removeFromOutput,
  "AmmoOwner": functionTemplates.removeFromOutput,
  "AmmoUnit": functionTemplates.removeFromOutput,
  "ArcSlop": functionTemplates.removeFromOutput,
  "AttackTargetPriority": functionTemplates.removeFromOutput,
  "AutoCastAcquireLevel": functionTemplates.removeFromOutput,
  "AutoCastFilters": functionTemplates.removeFromOutput,
  "AutoQueueArray": functionTemplates.removeFromOutput,
  "BehaviorFlags": functionTemplates.removeFromOutput,
  "BehaviorLink": functionTemplates.removeFromOutput,
  "BehaviorLinkDisableArray": functionTemplates.removeFromOutput,
  "BehaviorState": functionTemplates.removeFromOutput,
  "BuffFlags": functionTemplates.removeFromOutput,
  "CAccumulatorDistance": functionTemplates.removeFromOutput,
  "CAccumulatorDistanceUnitTraveled": functionTemplates.removeFromOutput,
  "CAccumulatorTimed": functionTemplates.removeFromOutput,
  "CAccumulatorToken": {
    formatElement: (formattedElement: any, element: any): any => {
      const newElement: any = {
        id: formattedElement.id,
        scale: formattedElement.scale,
        min: formattedElement.minAccumulation || 0,
        max: formattedElement.maxAccumulation,
        operator: formattedElement.applicationRule,
        tokenId: formattedElement.tokenId
      }

      return newElement
    },
  },
  "CAccumulatorTrackedUnitCount": functionTemplates.removeFromOutput,
  "CAccumulatorVitals": {
    formatElement: (formattedElement: any, element: any): any => {
      const newElement: any = {
        id: formattedElement.id,
        ratio: formattedElement.ratio,
        vital: formattedElement.vitalType,
        min: formattedElement.minAccumulation,
        max: formattedElement.maxAccumulation,
        operator: formattedElement.applicationRule
      }

      if(formattedElement.missing) {
        newElement.missing = true
      }

      return newElement
    },
  },
  "CBehavior": functionTemplates.removeFromOutput,
  "CBehaviorBuff": {
    formatElement: elementFormatters.conditionallyFormatElement(
      elementFormatters.onlyHasKeys(
        "id",
        "infoIcon",
        "maxStackCount",
        "showInUI",
        "hidden",
      ),
      elementFormatters.removeFromOutput,
      elementFormatters.defaultElementFormatter,
    )
  },
  "CBehaviorPathingTypeProbes": functionTemplates.removeFromOutput,
  "CBehaviorTokenCounter": functionTemplates.removeFromOutput,
  "CBehaviorVeterancy": functionTemplates.removeFromOutput,
  "CargoSize": functionTemplates.removeFromOutput,
  "CEffectAbortMissle": functionTemplates.removeFromOutput,
  "CEffectAddTrackedUnit": functionTemplates.removeFromOutput,
  "CEffectApplyForce": functionTemplates.removeFromOutput,
  "CEffectApplyKinetic": functionTemplates.removeFromOutput,
  "CEffectApplyOffset": functionTemplates.removeFromOutput,
  "CEffectCancelOrder": functionTemplates.removeFromOutput,
  "CEffectClearTrackedUnits": functionTemplates.removeFromOutput,
  "CEffectCreatePersistent": {
    formatElement: elementFormatters.conditionallyFormatElement(
      elementFormatters.onlyHasKeys('id', 'chance'),
      elementFormatters.removeFromOutput,
      elementFormatters.defaultElementFormatter
    )
  },
  "CEffectDestroyPersistent": functionTemplates.removeFromOutput,
  "CEffectEnumTrackedUnits": functionTemplates.removeFromOutput,
  "CEffectIssueOrder": functionTemplates.removeFromOutput,
  "CEffectModifyBehaviorBuffDuration": functionTemplates.removeFromOutput,
  "CEffectRedirectMissile": functionTemplates.removeFromOutput,
  "CEffectReleaseMagazine": functionTemplates.removeFromOutput,
  "CEffectRemoveBehavior": functionTemplates.removeFromOutput,
  "CEffectRemoveKinetic": functionTemplates.removeFromOutput,
  "CEffectRemoveTrackedUnit": functionTemplates.removeFromOutput,
  "CEffectReturnMagazine": functionTemplates.removeFromOutput,
  "CEffectSwitch": {
    formatElement: elementFormatters.conditionallyFormatElement(
      elementFormatters.some(
        elementFormatters.attributeIsNotDefined('cases'),
        elementFormatters.isAttributeEmpty('cases'),
      ),
      elementFormatters.removeFromOutput,
      elementFormatters.defaultElementFormatter
    ),
  },
  "CEffectTeleport": functionTemplates.removeFromOutput,
  "CEffectTransferBehavior": functionTemplates.removeFromOutput,
  "CEffectUseCalldown": functionTemplates.removeFromOutput,
  "CEffectUseMagazine": functionTemplates.removeFromOutput,
  "CmdButtonArray": functionTemplates.removeFromOutput,
  "Collide": functionTemplates.removeFromOutput,
  "CombineArray": functionTemplates.removeFromOutput,
  "Cooldown": {
    ...functionTemplates.valueFromAttributeIfOnlyHasKeys('timeUse'),
    formatElement: elementFormatters.join(
      elementFormatters.attributeToNumber(),
      elementFormatters.removeAttributeFromElement('link'),
      functionTemplates.valueFromAttributeIfOnlyHasKeys('timeUse').formatElement
    ),
  },
  "CreateFlags": functionTemplates.removeFromOutput,
  "CritValidator": functionTemplates.removeFromOutput,
  "CursorEffect": functionTemplates.removeFromOutput,
  "CValidator": functionTemplates.removeFromOutput,
  "CValidatorCombine": {
    formatElement: elementFormatters.conditionallyFormatElement(
      elementFormatters.attributeIsNotDefined('validators'),
      elementFormatters.removeFromOutput,
      elementFormatters.defaultElementFormatter
    )
  },
  "CValidatorCondition": functionTemplates.removeFromOutput,
  "CValidatorEffect": functionTemplates.removeFromOutput,
  "CValidatorEffectAlias": functionTemplates.removeFromOutput,
  "CValidatorEffectCompareDodged": functionTemplates.removeFromOutput,
  "CValidatorEffectCompareEvaded": functionTemplates.removeFromOutput,
  "CValidatorFunction": functionTemplates.removeFromOutput,
  "CValidatorGameCompareTerrain": functionTemplates.removeFromOutput,
  "CValidatorGameCompareTimeOfDay": functionTemplates.removeFromOutput,
  "CValidatorLocation": functionTemplates.removeFromOutput,
  "CValidatorLocationArc": functionTemplates.removeFromOutput,
  "CValidatorLocationCanPathingCastTo": functionTemplates.removeFromOutput,
  "CValidatorLocationCompareCliffLevel": functionTemplates.removeFromOutput,
  "CValidatorLocationCompareRange": functionTemplates.removeFromOutput,
  "CValidatorLocationCreep": functionTemplates.removeFromOutput,
  "CValidatorLocationCrossChasm": functionTemplates.removeFromOutput,
  "CValidatorLocationCrossCliff": functionTemplates.removeFromOutput,
  "CValidatorLocationEnumArea": functionTemplates.removeFromOutput,
  "CValidatorLocationInPlayableMapArea": functionTemplates.removeFromOutput,
  "CValidatorLocationPathable": functionTemplates.removeFromOutput,
  "CValidatorLocationPlacement": functionTemplates.removeFromOutput,
  "CValidatorLocationShrub": functionTemplates.removeFromOutput,
  "CValidatorLocationType": functionTemplates.removeFromOutput,
  "CValidatorLocationVision": functionTemplates.removeFromOutput,
  "CValidatorPlayer": functionTemplates.removeFromOutput,
  "CValidatorPlayerAlliance": functionTemplates.removeFromOutput,
  "CValidatorPlayerCompareHeroMasteryTier": functionTemplates.removeFromOutput,
  "CValidatorPlayerCompareResult": functionTemplates.removeFromOutput,
  "CValidatorPlayerCompareType": functionTemplates.removeFromOutput,
  "CValidatorPlayerRequirement": functionTemplates.removeFromOutput,
  "CValidatorPlayerTalent": {
    ...BASE_FUNCTIONS.CValidatorPlayerTalent,
    formatElement: elementFormatters.join(
      BASE_FUNCTIONS.CValidatorPlayerTalent.formatElement,
      elementFormatters.selectAttributes('talent', 'hasTalent')
    )
  },
  "CValidatorUnit": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareBehaviorProbeHits": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareChargeUsed": functionTemplates.removeFromOutput,
  "CValidatorUnitBehaviorAlias": functionTemplates.removeFromOutput,
  "CValidatorUnitAbil": functionTemplates.removeFromOutput,
  "CValidatorUnitBehaviorState": functionTemplates.removeFromOutput,
  "CValidatorUnitState": functionTemplates.removeFromOutput,
  "CValidatorUnitFilters": functionTemplates.removeFromOutput,
  "CValidatorUnitInventory": functionTemplates.removeFromOutput,
  "CValidatorUnitInventoryIsFull": functionTemplates.removeFromOutput,
  "CValidatorUnitInventoryContainsItem": functionTemplates.removeFromOutput,
  "CValidatorUnitType": functionTemplates.removeFromOutput,
  "CValidatorUnitFlying": functionTemplates.removeFromOutput,
  "CValidatorUnitLastDamagePlayer": functionTemplates.removeFromOutput,
  "CValidatorUnitKinetic": functionTemplates.removeFromOutput,
  "CValidatorUnitMissileNullified": functionTemplates.removeFromOutput,
  "CValidatorUnitMover": functionTemplates.removeFromOutput,
  "CValidatorUnitOrder": functionTemplates.removeFromOutput,
  "CValidatorUnitOrderQueue": functionTemplates.removeFromOutput,
  "CValidatorUnitOrderTargetPathable": functionTemplates.removeFromOutput,
  "CValidatorUnitOrderTargetType": functionTemplates.removeFromOutput,
  "CValidatorUnitPathable": functionTemplates.removeFromOutput,
  "CValidatorUnitPathing": functionTemplates.removeFromOutput,
  "CValidatorUnitScanning": functionTemplates.removeFromOutput,
  "CValidatorUnitWeaponAnimating": functionTemplates.removeFromOutput,
  "CValidatorUnitWeaponCanTargetUnit": functionTemplates.removeFromOutput,
  "CValidatorUnitWeaponFiring": functionTemplates.removeFromOutput,
  "CValidatorUnitWeaponPlane": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareAttackPriority": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareAbilStage": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareTokenCount": functionTemplates.removeFromOutput,
  "CValidatorUnitHasBehaviorShield": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareCargo": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareDamageDealtTime": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareDamageTakenTime": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareDeath": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareField": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareKillCount": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareMarkerCount": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareMoverPhase": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareOrderCount": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareOrderTargetRange": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareSpeed": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareVeterancyLevel": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareVital": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareVitality": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareWeaponCooldown": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareWeaponLegacyState": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareWeaponStrafeState": functionTemplates.removeFromOutput,
  "CValidatorUnitDetected": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareBehaviorDuration": functionTemplates.removeFromOutput,
  "CValidatorUnitHasBehavior": functionTemplates.removeFromOutput,
  "CValidatorUnitCompareCooldown": functionTemplates.removeFromOutput,
  "CValidatorMissilePlacement": functionTemplates.removeFromOutput,
  "CValidatorCompareTrackedUnitsCount": functionTemplates.removeFromOutput,
  "CValidatorUnitTimeElapsed": functionTemplates.removeFromOutput,
  "CValidatorPlayerAI": functionTemplates.removeFromOutput,
  "CValidatorUnitArmorLevel": functionTemplates.removeFromOutput,
  "CValidatorIsUnitTracked": functionTemplates.removeFromOutput,
  "CValidatorLocationGroundPathingNearWall": functionTemplates.removeFromOutput,
  "DamageDealtXP": functionTemplates.removeFromOutput,
  "DamageResponse": functionTemplates.removeFromOutput,
  "DamageTakenXP": functionTemplates.removeFromOutput,
  "DeathTime": functionTemplates.removeFromOutput,
  "DisableValidatorArray": functionTemplates.removeFromOutput,
  "DisplayAttackCount": functionTemplates.removeFromOutput,
  "DisplayDuration": functionTemplates.removeFromOutput,
  "DisplayEffect": functionTemplates.removeFromOutput,
  "DisplayPriority": functionTemplates.removeFromOutput,
  "DurationBonusMax": functionTemplates.removeFromOutput,
  "DurationBonusMin": functionTemplates.removeFromOutput,
  "EffectHistoryLimit": functionTemplates.removeFromOutput,
  "ExcludeCasterPlayer": functionTemplates.removeFromOutput,
  "ExcludeCasterUnit": functionTemplates.removeFromOutput,
  "ExcludeOriginPlayer": functionTemplates.removeFromOutput,
  "Exhausted": functionTemplates.removeFromOutput,
  "Height": functionTemplates.removeFromOutput,
  "HeroPlaystyleFlags": functionTemplates.removeFromOutput,
  "ImageFacing": functionTemplates.removeFromOutput,
  "InfoTooltipPriority": functionTemplates.removeFromOutput,
  "InitialOffset": functionTemplates.removeFromOutput,
  "InnerRadiusSafetyMultiplier": functionTemplates.removeFromOutput,
  "InterruptArray": functionTemplates.removeFromOutput,
  "InterruptCost": functionTemplates.removeFromOutput,
  "KindSplash": functionTemplates.removeFromOutput,
  "LateralAcceleration": functionTemplates.removeFromOutput,
  "LegacyOptions": functionTemplates.removeFromOutput,
  "LoadTransportBehavior": functionTemplates.removeFromOutput,
  "Location": functionTemplates.removeFromOutput,
  "Marker": functionTemplates.removeFromOutput,
  "Mass": functionTemplates.removeFromOutput,
  "MinimapRadius": functionTemplates.removeFromOutput,
  "MinStackCountDisplayed": functionTemplates.removeFromOutput,
  "Mover": functionTemplates.removeFromOutput,
  "NodeArray": functionTemplates.removeFromOutput,
  "OccludeHeight": functionTemplates.removeFromOutput,
  "OperandArray": functionTemplates.removeFromOutput,
  "OtherBehavior": functionTemplates.removeFromOutput,
  "OverlapIndex": functionTemplates.removeFromOutput,
  "PartyFrameImage": functionTemplates.removeFromOutput,
  "PartyPanelButtonImage": functionTemplates.removeFromOutput,
  "PauseableArray": functionTemplates.removeFromOutput,
  "Player": functionTemplates.removeFromOutput,
  "PreemptableArray": functionTemplates.removeFromOutput,
  "PushPriority": functionTemplates.removeFromOutput,
  "RangeSlop": functionTemplates.removeFromOutput,
  "RefundArray": functionTemplates.removeFromOutput,
  "RefundFraction": functionTemplates.removeFromOutput,
  "RemoveValidatorArray": functionTemplates.removeFromOutput,
  "RepairTime": functionTemplates.removeFromOutput,
  "Requirements": functionTemplates.removeFromOutput,
  "Response": functionTemplates.removeFromOutput,
  "ResponseFlags": functionTemplates.removeFromOutput,
  "ReviveType": functionTemplates.removeFromOutput,
  "RoleScoreValueOverride": functionTemplates.removeFromOutput,
  "RowScoreValueOverride": functionTemplates.removeFromOutput,
  "ScoreResult": functionTemplates.removeFromOutput,
  "SearchFilters": functionTemplates.removeFromOutput,
  "SearchFlags": functionTemplates.removeFromOutput,
  "SeparationRadius": functionTemplates.removeFromOutput,
  "SharedFlags": functionTemplates.removeFromOutput,
  "ShowProgressArray": functionTemplates.removeFromOutput,
  "SkinArray": functionTemplates.removeFromOutput,
  "SortIndex": functionTemplates.removeFromOutput,
  "SourceButtonFace": functionTemplates.removeFromOutput,
  "SpawnOffset": functionTemplates.removeFromOutput,
  "SplashHistory": functionTemplates.removeFromOutput,
  "SmartValidatorArray": functionTemplates.removeFromOutput,
  "StationaryTurningRate": functionTemplates.removeFromOutput,
  "SubgroupPriority": functionTemplates.removeFromOutput,
  "TacticalAIFilters": functionTemplates.removeFromOutput,
  "TalentAIBuildsArray": functionTemplates.removeFromOutput,
  "TargetMessage": functionTemplates.removeFromOutput,
  "TauntDuration": functionTemplates.removeFromOutput,
  "TauntDoesntStopUnit": functionTemplates.removeFromOutput,
  "TechPlayer": functionTemplates.removeFromOutput,
  "TeleportResetRange": functionTemplates.removeFromOutput,
  "TooltipFlags": functionTemplates.removeFromOutput,
  "TooltipVitalName": functionTemplates.removeFromOutput,
  "TrackingBehavior": functionTemplates.removeFromOutput,
  "TurningRate": functionTemplates.removeFromOutput,
  "TypeFallbackUnit": functionTemplates.removeFromOutput,
  "UninterruptibleArray": functionTemplates.removeFromOutput,
  "UseMarkerArray": functionTemplates.removeFromOutput,
  "ValidatedArray": functionTemplates.removeFromOutput,
  "VariationArray": functionTemplates.removeFromOutput,
  "Visibility": functionTemplates.removeFromOutput,
  "VOArray": functionTemplates.removeFromOutput,
  "VODefinition": functionTemplates.removeFromOutput,
  "VoiceLineArray": functionTemplates.removeFromOutput,
}
