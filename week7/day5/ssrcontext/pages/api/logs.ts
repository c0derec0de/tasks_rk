// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { visitLogs } from "@/shared/cache";
import type { NextApiRequest, NextApiResponse } from "next";
import { Logs } from "@/shared/types";

type Data = {
  logs?: Logs[];
  success: boolean;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const logs = visitLogs.getAll();
      return res.status(200).json({
        logs,
        success: true,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Error with get req",
      });
    }
  }

  if (req.method === "POST") {
    try {
      const { url, timestamp } = req.body;

      if (!url || !timestamp) {
        return res.status(400).json({
          success: false,
          message: "url and timestamp not found",
        });
      }

      const log = {
        url,
        timestamp,
      };

      visitLogs.add(log);
      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Error with post req",
      });
    }
  }
}
