import { useRef, useState } from "react";
import {
  Group,
  Stack,
  Text,
  Button,
  List,
  ThemeIcon,
  ActionIcon,
  Badge,
} from "@mantine/core";
import { Dropzone, type FileWithPath, MIME_TYPES } from "@mantine/dropzone";
import {
  IconUpload,
  IconPhoto,
  IconX,
  IconFile,
  IconTrash,
} from "@tabler/icons-react";
import type {DragBoxProps} from './DragBox.d'

function humanFileSize(size?: number) {
  if (size == null) return "";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(
    Math.floor(Math.log(size) / Math.log(1024)),
    units.length - 1
  );
  const v = size / Math.pow(1024, i);
  return `${i === 0 ? Math.round(v) : v.toFixed(1)} ${units[i]}`;
}

const DragBox = ({initialFiles, form, type}:DragBoxProps) => {
  const [files, setFiles] = useState<FileWithPath[]>(initialFiles);
  const openRef = useRef<() => void>(null);

  const handleDrop = (incoming: FileWithPath[]) => {
    // append to current list (do not replace)
    setFiles((prev) => [...prev, ...incoming]);
    form.setFieldValue(`${type}`,[...files, ...incoming])
  };

  const removeAt = (index: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));
  const clearAll = () => setFiles([]);

  return (
    <Stack gap="md">
      <Dropzone
        openRef={openRef}
        onDrop={handleDrop}
        onReject={(rejections) => console.log("Rejected files", rejections)}
        accept={[
          MIME_TYPES.png,
          MIME_TYPES.jpeg,
          MIME_TYPES.svg,
          MIME_TYPES.pdf,
          MIME_TYPES.zip,
           "image/*",          // orice imagine (png, jpg, svg, webp, etc.)
          "video/*",          // orice video (mp4, mov, mkv, etc.)
          "audio/*",          // orice audio (mp3, wav, m4a, etc.)
        ]}
        maxSize={1000 * 1024 ** 2} // 10MB / file
        multiple
      >
        <Group
          justify="center"
          gap="xl"
          mih={180}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload size={52} stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={52} stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="lg" ta="center">
              Drag files here or click to select them
            </Text>
            <Text size="sm" c="dimmed" ta="center" mt={6}>
              You can add multiple files at once (max 10MB/file)
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} aria-label="Alege fișiere">
          Select files
        </Button>
        <Button
          variant="light"
          color="red"
          onClick={clearAll}
          disabled={files.length === 0}
          leftSection={<IconTrash size={16} />}
        >
          Clear the list
        </Button>
      </Group>
      <List
        spacing="xs"
        icon={
          <ThemeIcon size={24} radius="xl">
            <IconFile size={14} />
          </ThemeIcon>
        }
      >
        {files.map((file, idx) => (
          <List.Item key={`${file.name}-${idx}`}>
            <Group justify="space-between" wrap="nowrap">
              <Group gap="xs" wrap="nowrap">
                <Text fw={500}>{file.name}</Text>
                <Badge variant="light">{humanFileSize(file.size)}</Badge>
              </Group>
              <ActionIcon
                variant="subtle"
                color="red"
                onClick={() => removeAt(idx)}
                aria-label={`Remove ${file.name}`}
              >
                <IconX size={16} />
              </ActionIcon>
            </Group>
          </List.Item>
        ))}
        {files.length === 0 && (
          <Text c="dimmed" size="sm">
            You haven't added anything yet.
          </Text>
        )}
      </List>
    </Stack>
  );
};

export default DragBox;
