/*!
 * tr
 * https://github.com/gocom/tr
 *
 * Copyright (C) 2025 Jukka Svahn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import type {From, To} from '../types/Tr';

/**
 * Replaces given pairs in the haystack.
 *
 * This is implementation of standard **translate** replacement function,
 * which avoids recursively re-replacing the found matches in
 * the already replaced values.
 *
 * This is achieved by moving pointer forward when a found {@link from} value
 * is replaced with the {@link to} value, which then avoid searching needles
 * from the replacement {@link to} value.
 *
 * The following:
 * ```ts
 * import {tr} from '@gocom/tr';
 *
 * tr(
 *  'blue, red, yellow',
 *  {
 *    'red': 'blue',
 *    'blue': 'red'
 *  }
 * );
 * ```
 *
 * Returns:
 * ```
 * red, blue, yellow
 * ```
 *
 * @group Library
 * @category API
 */
export const tr = (haystack: string, pairs: {[key: From]: To}) => {
  let result = '';
  let match = false;
  let replacement = '';

  for (let position = 0; position < haystack.length; position++) {
    match = false;

    for (const [from, to] of Object.entries(pairs)) {
      if (haystack.startsWith(from, position)) {
        match = true;
        replacement = to;
        position = position + from.length - 1;
        break;
      }
    }

    if (match) {
      result += replacement;
    } else {
      result += haystack.charAt(position);
    }
  }

  return result;
};
