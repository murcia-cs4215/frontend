import { cleanUpContextAfterRun, prepareContextForRun } from 'ocontract/build/context';
import { monitorProgram } from 'ocontract/build/contracts/static/contractMonitor';
import { SourceError } from 'ocontract/build/errors/types';
import { evaluate } from 'ocontract/build/interpreter/interpreter';
import { parse } from 'ocontract/build/parser/parser';
import { Context, Result } from 'ocontract/build/runtimeTypes';
import { typeCheck } from 'ocontract/build/types/static';

export function run(code: string, context: Context): Result {
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
