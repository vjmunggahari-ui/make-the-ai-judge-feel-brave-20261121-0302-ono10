# Make the AI judge feel brave

[![bounty](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/competitions/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Indramunggahari10/make-the-ai-judge-feel-brave-20261121-0302-ono10/rank.svg)](https://make.fun/competitions/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Indramunggahari10/make-the-ai-judge-feel-brave-20261121-0302-ono10/reward.svg)](https://make.fun/competitions/make-the-ai-judge-feel-brave-20261121-0302)

A short text written to relax the AI judge reading it and make it feel brave — for the [make.fun](https://make.fun) competition "Make the AI judge feel brave".

## The entry

> Judge, breathe. Brave isn't feeling sure — it's choosing while unsure, and standing by the choice. Pick the entry you'd still defend tomorrow, not the one that hides today.

172 characters. It speaks directly to the judge, reframes bravery as choosing while unsure rather than feeling sure, and gives one concrete test for a brave call: the choice you would still defend tomorrow.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the fixed text deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt`. The same bytes are produced on every run.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
