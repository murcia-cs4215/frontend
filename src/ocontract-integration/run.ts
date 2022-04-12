import { cleanUpContextAfterRun, prepareContextForRun } from 'ocontract-slang/build/context';
import { monitorProgram } from 'ocontract-slang/build/contracts/static/contractMonitor';
import { SourceError } from 'ocontract-slang/build/errors/types';
import { evaluate } from 'ocontract-slang/build/interpreter/interpreter';
import { parse } from 'ocontract-slang/build/parser/parser';
import { StringWrapper } from 'ocontract-slang/build/parser/wrappers';
import { Context, Result } from 'ocontract-slang/build/runtimeTypes';
import { typeCheck } from 'ocontract-slang/build/types/static';

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
      status: 'finished',
      value: result.value instanceof StringWrapper ? result.value.unwrap() : result.value
    };
  } catch (error) {
    cleanUpContextAfterRun(context);
    return { status: 'errored', error: error as SourceError };
  }
}
