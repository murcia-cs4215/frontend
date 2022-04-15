import { cleanUpContextAfterRun, prepareContextForRun } from 'ocontract/build/context';
import { monitorProgram } from 'ocontract/build/contracts/static/contractMonitor';
import { SourceError } from 'ocontract/build/errors/types';
import {
  globalEnvironmentDefaultConstants,
  globalEnvironmentDefaultConstantTypes
} from 'ocontract/build/interpreter/default/constants';
import { evaluate } from 'ocontract/build/interpreter/interpreter';
import { parse } from 'ocontract/build/parser/parser';
import { Context, Result } from 'ocontract/build/runtimeTypes';
import { typeCheck } from 'ocontract/build/types/static';

// For some reason, without this, global constants simply won't show up right.
// This is thus added to ensure that everything is loaded correctly.
function loadGlobalConstants(context: Context): void {
  context.runtime.environments[0].head = {
    ...context.runtime.environments[0].head,
    ...globalEnvironmentDefaultConstants
  };
  globalEnvironmentDefaultConstantTypes.forEach(([key, type]) =>
    context.typeEnvironments[0].typeMap.set(key, type)
  );
}

export function run(code: string, context: Context): Result {
  loadGlobalConstants(context);
  try {
    const program = parse(code);
    // TODO: Wrap computation in a scheduler / stepper
    typeCheck(program, context);
    monitorProgram(program, context);

    prepareContextForRun(context);
    const result = evaluate(program, context);
    cleanUpContextAfterRun(context);

    return {
      ...result,
      status: 'finished'
    };
  } catch (error) {
    cleanUpContextAfterRun(context);
    return { status: 'errored', error: error as SourceError };
  }
}
