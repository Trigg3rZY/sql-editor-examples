import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import styles from './Editor.module.css';

import './initMonaco';

export function Editor() {
  const editorRef = useRef<monaco.editor.ICodeEditor | null>(null);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const domElement = domRef.current;
    if (!domElement) {
      return;
    }
    const instance = monaco.editor.create(domElement, { language: 'sql' });
    editorRef.current = instance;

    return () => {
      instance.dispose();
    };
  }, []);

  return <div ref={domRef} className={styles.editor}></div>;
}
