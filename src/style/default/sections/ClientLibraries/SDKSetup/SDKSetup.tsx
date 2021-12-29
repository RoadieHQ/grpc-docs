import React, {Fragment} from "react";
import {ProgrammingLanguage} from "GendocuPublicApis/sdk/ts/gendocu/common/types_pb";
import {SetupGolangSDK} from "./SetupGolangSDK";
import {SetupJavaSDK} from "./SetupJavaSDK";
import {SetupPythonSDK} from "./SetupPythonSDK";
import {SetupJavascriptSDK} from "./SetupJavascriptSDK";
import {SetupTypescriptSDK} from "./SetupTypescriptSDK";
import {SetupCSharpSDK} from "./SetupCSharpSDK";
import {ProgrammingLanguageType} from "../../../../../common/Types";
import {SetupGrpcurl} from "./SetupGrpcurl";

interface SDKSetupProps {
  lang: ProgrammingLanguageType
  repositoryUrl: string
  projectName: string
}

export const SDKSetup = (props: SDKSetupProps) => {
  switch (props.lang) {
    case ProgrammingLanguage.GO:
      return <SetupGolangSDK repositoryUrl={props.repositoryUrl}/>
    case ProgrammingLanguage.JAVA:
      return <SetupJavaSDK repositoryUrl={props.repositoryUrl}
                           projectName={props.projectName}
                           pathToBinary={"/sdk/java/"}/>
    case ProgrammingLanguage.PYTHON:
      return <SetupPythonSDK repositoryUrl={props.repositoryUrl} projectName={props.projectName}/>
    case ProgrammingLanguage.JAVASCRIPT:
      return <SetupJavascriptSDK repositoryUrl={props.repositoryUrl} commitSha={"master"}/>
    case ProgrammingLanguage.TYPESCRIPT:
      return <SetupTypescriptSDK repositoryUrl={props.repositoryUrl} commitSha={"master"}/>
    case ProgrammingLanguage.CSHARP:
      return <SetupCSharpSDK projectName={props.projectName} repositoryUrl={props.repositoryUrl}
                             commitSha={"master"}></SetupCSharpSDK>
    case ProgrammingLanguage.GRPCURL:
      return <SetupGrpcurl />
    default:
      return <Fragment></Fragment>
  }
}
