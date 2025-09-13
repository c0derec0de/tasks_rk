// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { visitLogs } from "@/shared/cache";
import type { NextApiRequest, NextApiResponse } from "next";
import { Logs } from "@/shared/types";

type Data = {
  logs?: Logs[];
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const logs = visitLogs.getAll();
    return res.status(200).json({
      logs,
    });
  }

  if (req.method === "POST") {
    const { url, timestamp } = req.body;

    if (!url || !timestamp) {
      return res.status(400).json({
        message: "url and timestamp not found",
      });
    }

    const log = {
      url,
      timestamp,
    };

    visitLogs.add(log);
    return res.status(200).json({});
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
