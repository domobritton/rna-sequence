import faunadb from 'faunadb';
import type { NextApiRequest, NextApiResponse } from 'next';

import { faunaClient } from '../../../../lib/fauna';
import { RemoteRnaData } from './model';

const q = faunadb.query;

module.exports = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const dbs: RemoteRnaData = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index('all_rna'))),
        q.Lambda((show) => q.Get(show))
      )
    );
    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
