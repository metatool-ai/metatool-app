'use server';

import { and, eq, or } from 'drizzle-orm';

import { db } from '@/db';
import { mcpServersTable, McpServerStatus } from '@/db/schema';
import { McpServer } from '@/types/mcp-server';

export async function getMcpServers(profileUuid: string) {
  const servers = await db
    .select()
    .from(mcpServersTable)
    .where(
      and(
        eq(mcpServersTable.profile_uuid, profileUuid),
        or(
          eq(mcpServersTable.status, McpServerStatus.ACTIVE),
          eq(mcpServersTable.status, McpServerStatus.INACTIVE)
        )
      )
    );

  return servers as McpServer[];
}

export async function getMcpServerByUuid(
  profileUuid: string,
  uuid: string
): Promise<McpServer | null> {
  const server = await db
    .select()
    .from(mcpServersTable)
    .where(
      and(
        eq(mcpServersTable.uuid, uuid),
        eq(mcpServersTable.profile_uuid, profileUuid)
      )
    )
    .limit(1);

  if (server.length === 0) {
    return null;
  }

  return server[0];
}

export async function deleteMcpServerByUuid(
  profileUuid: string,
  uuid: string
): Promise<void> {
  await db
    .delete(mcpServersTable)
    .where(
      and(
        eq(mcpServersTable.uuid, uuid),
        eq(mcpServersTable.profile_uuid, profileUuid)
      )
    );
}

export async function toggleMcpServerStatus(
  profileUuid: string,
  uuid: string,
  newStatus: McpServerStatus
): Promise<void> {
  await db
    .update(mcpServersTable)
    .set({ status: newStatus })
    .where(
      and(
        eq(mcpServersTable.uuid, uuid),
        eq(mcpServersTable.profile_uuid, profileUuid)
      )
    );
}

export async function updateMcpServer(
  profileUuid: string,
  uuid: string,
  data: {
    name?: string;
    description?: string;
    command?: string;
    args?: string[];
    env?: { [key: string]: string };
  }
): Promise<void> {
  await db
    .update(mcpServersTable)
    .set({
      ...data,
    })
    .where(
      and(
        eq(mcpServersTable.uuid, uuid),
        eq(mcpServersTable.profile_uuid, profileUuid)
      )
    );
}

export async function createMcpServer(
  profileUuid: string,
  data: {
    name: string;
    description: string;
    command: string;
    args: string[];
    env: { [key: string]: string };
  }
): Promise<void> {
  await db.insert(mcpServersTable).values({
    ...data,
    profile_uuid: profileUuid,
  });
}
