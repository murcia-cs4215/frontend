function formatDescription(title: string, description: string): string {
  return `<div><h4>${title}</h4><div class="description">\n    ${description}\n</div></div>`;
}

export type Variant = 'ocontract';
export const SourceDocumentation = {
  builtins: {
    default: {
      is_nan: {
        description: formatDescription(
          'is_nan : float -> bool',
          '<code>is_nan x</code> is <code>true</code> if and only if <code>x</code> is not a number (see nan).'
        ),
        meta: 'func'
      },
      of_int: {
        description: formatDescription(
          'of_int : int -> float',
          'Convert an integer to floating-point.'
        ),
        meta: 'func'
      },
      to_int: {
        description: formatDescription(
          'to_int : float -> int',
          'Truncate the given floating-point number to an integer. The result is unspecified if the argument is <code>nan</code> or falls outside the range of representable integers.'
        ),
        meta: 'func'
      },
      sqrt: {
        description: formatDescription('sqrt : float -> float', 'Square root.'),
        meta: 'func'
      },
      cbrt: {
        description: formatDescription('cbrt : float -> float', 'Cube root.'),
        meta: 'func'
      },
      exp: {
        description: formatDescription('exp : float -> float', 'Exponential.'),
        meta: 'func'
      },
      exp2: {
        description: formatDescription('exp2 : float -> float', 'Base 2 exponential function.'),
        meta: 'func'
      },
      log: {
        description: formatDescription('log : float -> float', 'Natural logarithm.'),
        meta: 'func'
      },
      log10: {
        description: formatDescription('log10 : float -> float', 'Base 10 logarithm.'),
        meta: 'func'
      },
      log2: {
        description: formatDescription('log2 : float -> float', 'Base 2 logarithm.'),
        meta: 'func'
      },
      expm1: {
        description: formatDescription(
          'expm1 : float -> float',
          '<code>expm1 x</code> computes <code>exp x -. 1.0</code>, giving numerically-accurate results even if <code>x</code> is close to <code>0.0</code>.'
        ),
        meta: 'func'
      },
      log1p: {
        description: formatDescription(
          'log1p : float -> float',
          '<code>log1p x</code> computes <code>log(1.0 +. x)</code> (natural logarithm), giving numerically-accurate results even if <code>x</code> is close to <code>0.0</code>.'
        ),
        meta: 'func'
      },
      cos: {
        description: formatDescription('cos : float -> float', 'Cosine. Argument is in radians.'),
        meta: 'func'
      },
      sin: {
        description: formatDescription('sin : float -> float', 'Sine. Argument is in radians.'),
        meta: 'func'
      },
      tan: {
        description: formatDescription('tan : float -> float', 'Tangent. Argument is in radians.'),
        meta: 'func'
      },
      acos: {
        description: formatDescription(
          'acos : float -> float',
          'Arc cosine. The argument must fall within the range <code>[-1.0, 1.0]</code>. Result is in radians and is between <code>0.0</code> and <code>pi</code>.'
        ),
        meta: 'func'
      },
      asin: {
        description: formatDescription(
          'asin : float -> float',
          'Arc sine. The argument must fall within the range <code>[-1.0, 1.0]</code>. Result is in radians and is between <code>-pi/2</code> and <code>pi/2</code>.'
        ),
        meta: 'func'
      },
      atan: {
        description: formatDescription(
          'atan : float -> float',
          'Arc tangent. Result is in radians and is between <code>-pi/2</code> and <code>pi/2</code>.'
        ),
        meta: 'func'
      },
      atan2: {
        description: formatDescription(
          'atan2 : float -> float',
          '<code>atan2 y x</code> returns the arc tangent of <code>y /. x</code>. The signs of <code>x</code> and <code>y</code> are used to determine the quadrant of the result. Result is in radians and is between <code>-pi</code> and <code>pi</code>.'
        ),
        meta: 'func'
      },
      hypot: {
        description: formatDescription(
          'hypot : float -> float -> float',
          '<code>hypot x y</code> returns <code>sqrt(x *. x + y *. y)</code>, that is, the length of the hypotenuse of a right-angled triangle with sides of length <code>x</code> and <code>y</code>, or, equivalently, the distance of the point <code>(x,y)</code> to origin. If one of <code>x</code> or <code>y</code> is infinite, returns <code>infinity</code> even if the other is <code>nan</code>.'
        ),
        meta: 'func'
      },
      cosh: {
        description: formatDescription(
          'cosh : float -> float',
          'Hyperbolic cosine. Argument is in radians.'
        ),
        meta: 'func'
      },
      sinh: {
        description: formatDescription(
          'sinh : float -> float',
          'Hyperbolic sine. Argument is in radians.'
        ),
        meta: 'func'
      },
      tanh: {
        description: formatDescription(
          'tanh : float -> float',
          'Hyperbolic tangent. Argument is in radians.'
        ),
        meta: 'func'
      },
      acosh: {
        description: formatDescription(
          'acosh : float -> float',
          'Hyperbolic arc cosine. The argument must fall within the range <code>[1.0, inf]</code>. Result is in radians and is between <code>0.0</code> and <code>inf</code>.'
        ),
        meta: 'func'
      },
      asinh: {
        description: formatDescription(
          'asinh : float -> float',
          'Hyperbolic arc sine. The argument and result range over the entire real line. Result is in radians.'
        ),
        meta: 'func'
      },
      atanh: {
        description: formatDescription(
          'atanh : float -> float',
          'Hyperbolic arc tangent. The argument must fall within the range <code>[-1.0, 1.0]</code>. Result is in radians and ranges over the entire real line.'
        ),
        meta: 'func'
      },
      round: {
        description: formatDescription(
          'round : float -> float',
          '<code>round x</code> rounds <code>x</code> to the nearest integer with ties (fractional values of 0.5) rounded away from zero, regardless of the current rounding direction. If <code>x</code> is an integer, <code>+0.</code>, <code>-0.</code>, <code>nan</code>, or <code>infinite</code>, <code>x</code> itself is returned.'
        ),
        meta: 'func'
      },
      ceil: {
        description: formatDescription(
          'ceil : float -> float',
          'Round above to an integer value. <code>ceil f</code> returns the least integer value greater than or equal to <code>f</code>. The result is returned as a float.'
        ),
        meta: 'func'
      },
      floor: {
        description: formatDescription(
          'floor : float -> float',
          'Round below to an integer value. <code>floor f</code> returns the greatest integer value less than or equal to <code>f</code>. The result is returned as a float.'
        ),
        meta: 'func'
      },
      positive: {
        description: formatDescription(
          'positive : numeric -> bool',
          'Checks whether a given numeric value is positive. Works for both int and float.'
        ),
        meta: 'func'
      },
      negative: {
        description: formatDescription(
          'negative : numeric -> bool',
          'Checks whether a given numeric value is negative. Works for both int and float.'
        ),
        meta: 'func'
      },
      zero: {
        description: formatDescription(
          'zero : numeric -> bool',
          'Checks whether a given numeric value is zero. Works for both int and float.'
        ),
        meta: 'func'
      },
      make: {
        description: formatDescription(
          'make : int -> char -> string',
          '<code>make n c</code> is a string of length <code>n</code> with each index holding the character <code>c</code>.'
        ),
        meta: 'func'
      },
      length: {
        description: formatDescription(
          'length : string -> int',
          '<code>length s</code> is the length (number of bytes/characters) of <code>s</code>.'
        ),
        meta: 'func'
      },
      get: {
        description: formatDescription(
          'get : string -> int -> char',
          '<code>get s i</code> is the character at index <code>i</code> in <code>s</code>.'
        ),
        meta: 'func'
      },
      starts_with: {
        description: formatDescription(
          'starts_with : prefix:string -> string -> bool',
          '<code>starts_with prefix s</code> is <code>true</code> if and only if <code>s</code> starts with <code>prefix</code>.'
        ),
        meta: 'func'
      },
      end_with: {
        description: formatDescription(
          'ends_with : suffix:string -> string -> bool',
          '<code>ends_with suffix s</code> is <code>true</code> if and only if <code>s</code> ends with <code>suffix</code>.'
        ),
        meta: 'func'
      },
      contains: {
        description: formatDescription(
          'contains : string -> char -> bool',
          '<code>contains s c</code> is <code>true</code> if and only if <code>c</code> appears in <code>s</code>.'
        ),
        meta: 'func'
      },
      substring: {
        description: formatDescription(
          'substring : string -> int -> int -> string',
          '<code>substring s pos len</code> is a string of length <code>len</code>, containing the substring of <code>s</code> that starts at position <code>pos</code> and has length <code>len</code>.'
        ),
        meta: 'func'
      },
      uppercase: {
        description: formatDescription(
          'uppercase : string -> string',
          '<code>uppercase s</code> is <code>s</code> with all lowercase letters translated to uppercase.'
        ),
        meta: 'func'
      },
      lowercase: {
        description: formatDescription(
          'lowercase : string -> string',
          '<code>lowercase s</code> is <code>s</code> with all uppercase letters translated to lowercase.'
        ),
        meta: 'func'
      },
      capitalize: {
        description: formatDescription(
          'capitalize : string -> string',
          '<code>capitalize s</code> is <code>s</code> with the first character set to uppercase.'
        ),
        meta: 'func'
      },
      any: {
        description: formatDescription(
          'any : any -> true',
          'Takes in any value and returns <code>true</code>. Can be used as a default contract predicate that accepts anything.'
        ),
        meta: 'func'
      },
      to_string: {
        description: formatDescription(
          'to_string : any -> string',
          'Return the string representation of any value.'
        ),
        meta: 'func'
      }
    }
  },
  keywords: {
    default: {
      let: {
        title: 'let',
        meta: 'keyword'
      },
      if: {
        title: 'if',
        meta: 'keyword'
      },
      then: {
        title: 'then',
        meta: 'keyword'
      },
      else: {
        title: 'else',
        meta: 'keyword'
      },
      fun: {
        title: 'fun',
        meta: 'keyword'
      },
      in: {
        title: 'in',
        meta: 'keyword'
      },
      rec: {
        title: 'rec',
        meta: 'keyword'
      },
      contract: {
        title: 'contract',
        meta: 'keyword'
      }
    }
  },
  types: {
    default: {
      int: {
        title: 'int',
        meta: 'type'
      },
      float: {
        title: 'float',
        meta: 'type'
      },
      char: {
        title: 'char',
        meta: 'type'
      },
      string: {
        title: 'string',
        meta: 'type'
      },
      bool: {
        title: 'bool',
        meta: 'type'
      }
    }
  }
};

export const MAX_LIST_DISPLAY_LENGTH = 100;
