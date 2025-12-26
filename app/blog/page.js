// @flow strict

import { redirect } from 'next/navigation';

export default function Page() {
  // Permanently redirect /blog to /achievements
  redirect('/achievements');
}